"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../[locale]/portofolio/dataporto";
import { useTranslation } from "../hooks/useTranslation";

const TerminalHero = () => {
  const { t, locale } = useTranslation();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const initialized = useRef(false);

  const commands = {
    help: "List available commands",
    whoami: "Display profile information",
    portfolio: "List featured projects",
    contact: "Show contact information",
    clear: "Clear terminal history",
    socials: "List social media links",
    ask: "Ask AI about me (or just type your question)",
  };

  // Typing effect helper
  const typeText = async (lines) => {
    setIsTyping(true);

    // Add empty output block first
    setHistory((prev) => [...prev, { type: "output", content: [] }]);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let currentText = "";

      // Add new empty line
      setHistory((prev) => {
        const newHistory = [...prev];
        const lastItem = newHistory[newHistory.length - 1];
        if (lastItem.type === "output") {
          lastItem.content = [...lastItem.content, ""];
        }
        return newHistory;
      });

      // Type char by char
      for (let j = 0; j < line.length; j++) {
        currentText += line[j];
        // Faster typing speed (15ms)
        await new Promise((resolve) => setTimeout(resolve, 15));

        setHistory((prev) => {
          const newHistory = [...prev];
          const lastItem = newHistory[newHistory.length - 1];
          if (lastItem.type === "output") {
            const newContent = [...lastItem.content];
            newContent[newContent.length - 1] = currentText;
            lastItem.content = newContent;
          }
          return newHistory;
        });
      }
      // Small delay between lines
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setIsTyping(false);
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Initial greeting with typing effect
    const init = async () => {
      await typeText([
        "Initializing MHRidwan Terminal v2.0.0...",
        "Loading portfolio data...",
        "Connecting to AI module...",
        "System Ready.",
        "-------------------------------------",
        "Welcome! I am Ridwan's interactive portfolio terminal.",
        "Type 'help' to see what I can do, or just ask me anything!",
      ]);
    };
    init();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleAiChat = async (query) => {
    setIsTyping(true);
    setHistory((prev) => [
      ...prev,
      { type: "output", content: ["Thinking..."] },
    ]);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      setHistory((prev) => {
        const newHistory = [...prev];
        // Remove "Thinking..."
        newHistory.pop();

        // Clean up response to remove markdown artifacts if any slip through
        const cleanReply = (data.reply || "Error: Could not reach AI.")
          .replace(/\*\*/g, "") // Remove bold markers
          .replace(/^\s*\*\s/gm, "- "); // Replace bullet points with dashes

        return [
          ...newHistory,
          {
            type: "output",
            content: cleanReply.split("\n"),
          },
        ];
      });
    } catch (err) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop();
        return [
          ...newHistory,
          { type: "output", content: ["Error: AI service unavailable."] },
        ];
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleCommand = async (cmd) => {
    const cleanCmd = cmd.trim();
    const lowerCmd = cleanCmd.toLowerCase();

    // Add command to history immediately
    setHistory((prev) => [...prev, { type: "command", content: cmd }]);

    if (lowerCmd.startsWith("ask ")) {
      const query = cleanCmd.substring(4);
      await handleAiChat(query);
      return;
    }

    let output = [];

    switch (lowerCmd) {
      case "help":
        output = Object.entries(commands).map(
          ([key, desc]) => `${key.padEnd(12)} - ${desc}`
        );
        break;
      case "whoami":
        output = [
          "Name: Mohamad Hasyim Ridwan",
          "Role: Full Stack Developer",
          "Stack: React, Next.js, Node.js, TypeScript, React Native",
          "Location: Indonesia",
          "Status: Available for new projects",
        ];
        break;
      case "portfolio":
        output = [
          "Featured Projects:",
          ...portfolioData
            .slice(0, 5)
            .map(
              (p, i) =>
                `${i + 1}. ${p.title} [${p.technologies
                  .slice(0, 3)
                  .join(", ")}]`
            ),
          "",
          `Type 'open <number>' to view project details (e.g., 'open 1')`,
          `Or visit /${locale}/portofolio for full list.`,
        ];
        break;
      case "contact":
        output = [
          "Email: mhrdwan@gmail.com",
          "Phone: +62 (812) 21871961",
          "Type 'email' to open mail client.",
        ];
        break;
      case "email":
        window.location.href = "mailto:mhrdwan@gmail.com";
        output = ["Opening mail client..."];
        break;
      case "socials":
        output = [
          "GitHub: github.com/mhrdwan",
          "LinkedIn: linkedin.com/in/mhrdwan",
          "Instagram: instagram.com/mhrdwan",
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        if (lowerCmd.startsWith("open ")) {
          const index = parseInt(lowerCmd.split(" ")[1]) - 1;
          if (index >= 0 && index < portfolioData.length) {
            const project = portfolioData[index];
            output = [`Opening ${project.title}...`];
            if (project.link && project.link !== "Private") {
              window.open(project.link, "_blank");
            } else {
              output.push("Project is private or has no public link.");
            }
          } else {
            output = [`Project not found. Type 'portfolio' to see list.`];
          }
        } else if (cleanCmd === "") {
          output = [];
        } else {
          // Default to AI chat for any unknown command
          await handleAiChat(cleanCmd);
          return;
        }
    }

    setHistory((prev) => [...prev, { type: "output", content: output }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isTyping) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="w-full h-[500px] md:h-[600px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden flex flex-col border border-zinc-700 font-mono text-sm md:text-base"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-zinc-700 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="text-zinc-400 text-xs flex items-center gap-2">
          <span className="hidden sm:inline">mhrdwan@portfolio: ~</span>
          <span className="sm:hidden">terminal</span>
        </div>
        <div className="w-14" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2 animate-in fade-in duration-200">
            {item.type === "command" ? (
              <div className="flex items-center text-zinc-300 mt-3">
                <span className="text-green-500 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <span className="text-white font-semibold">{item.content}</span>
              </div>
            ) : (
              <div className="text-zinc-300 pl-6 whitespace-pre-wrap leading-relaxed font-light">
                {item.content.map((line, i) => (
                  <div key={i} className="mb-0.5">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center text-zinc-300 mt-2">
          <span className="text-green-500 mr-2">➜</span>
          <span className="text-blue-400 mr-2">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0 placeholder-zinc-600"
            autoFocus
            spellCheck="false"
            autoComplete="off"
            placeholder={isTyping ? "Processing..." : ""}
            disabled={isTyping}
          />
          {!isTyping && (
            <span className="w-2 h-5 bg-zinc-400 animate-pulse ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
