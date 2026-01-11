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

    // Initial greeting with typing effect (locale-aware)
    const init = async () => {
      const greetings = locale === "id" ? [
        "Menginisialisasi MHRidwan Terminal v2.0.0...",
        "Memuat data portofolio...",
        "Sistem Siap.",
        "Selamat datang! Saya adalah terminal portofolio interaktif Ridwan.",
        "Saya tahu segalanya tentang Ridwan. Tanyakan apa saja!",
      ] : [
        "Initializing MHRidwan Terminal v2.0.0...",
        "Loading portfolio data...",
        "System Ready.",
        "Welcome! I am Ridwan's interactive portfolio terminal.",
        "I know everything about Ridwan. Ask me anything!",
      ];
      await typeText(greetings);
    };
    init();
  }, []);

  // Auto-scroll to bottom when history changes or during typing
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  // Word-by-word typing effect for AI responses
  const typeAiResponse = async (text) => {
    const lines = text.split("\n");
    
    // Add empty output block first
    setHistory((prev) => [...prev, { type: "output", content: [""] }]);
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      const words = line.split(" ");
      
      // Add new line if not first
      if (lineIndex > 0) {
        setHistory((prev) => {
          const newHistory = [...prev];
          const lastItem = newHistory[newHistory.length - 1];
          if (lastItem.type === "output") {
            lastItem.content = [...lastItem.content, ""];
          }
          return newHistory;
        });
      }
      
      // Type word by word
      let currentLine = "";
      for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        const word = words[wordIndex];
        currentLine += (wordIndex === 0 ? "" : " ") + word;
        
        // Update history with current line progress
        setHistory((prev) => {
          const newHistory = [...prev];
          const lastItem = newHistory[newHistory.length - 1];
          if (lastItem.type === "output") {
            const newContent = [...lastItem.content];
            newContent[newContent.length - 1] = currentLine;
            lastItem.content = newContent;
          }
          return newHistory;
        });
        
        // Scroll to bottom during typing
        scrollToBottom();
        
        // Delay between words (40-80ms for natural feel)
        await new Promise((resolve) => setTimeout(resolve, 40 + Math.random() * 40));
      }
      
      // Small delay between lines
      if (lineIndex < lines.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
  };

  const handleAiChat = async (query) => {
    setIsTyping(true);
    setHistory((prev) => [
      ...prev,
      { type: "output", content: [locale === "id" ? "Loading..." : "Loading..."] },
    ]);

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      // Remove "Thinking..." first
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop();
        return newHistory;
      });

      // Clean up response to remove markdown artifacts if any slip through
      const cleanReply = (data.reply || (locale === "id" ? "Error: Tidak bisa menghubungi AI." : "Error: Could not reach AI."))
        .replace(/\*\*/g, "") // Remove bold markers
        .replace(/^\s*\*\s/gm, "- "); // Replace bullet points with dashes

      // Type the response word by word
      await typeAiResponse(cleanReply);
      
    } catch (err) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop();
        return [
          ...newHistory,
          { type: "output", content: [locale === "id" ? "Error: Layanan AI tidak tersedia." : "Error: AI service unavailable."] },
        ];
      });
    } finally {
      setIsTyping(false);
      // Refocus input and scroll to bottom after AI response
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 100);
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
      // Keep focus on input after command
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 50);
    }
  };

  return (
    <div
      className="w-full h-full min-h-[300px] sm:min-h-[400px] max-h-[70vh] sm:max-h-[80vh] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden flex flex-col border border-zinc-700 font-mono text-xs sm:text-sm md:text-base"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-[#2d2d2d] px-3 sm:px-4 py-2 flex items-center justify-between border-b border-zinc-700 select-none shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="text-zinc-400 text-[10px] sm:text-xs flex items-center gap-2">
          <span className="hidden md:inline">mhrdwan@portfolio: ~</span>
          <span className="hidden sm:inline md:hidden">mhrdwan: ~</span>
          <span className="sm:hidden">terminal</span>
        </div>
        <div className="w-10 sm:w-14" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 scroll-smooth overscroll-contain touch-pan-y"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: '#52525b transparent'
        }}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2 animate-in fade-in duration-200">
            {item.type === "command" ? (
              <div className="flex items-center text-zinc-300 mt-2 sm:mt-3 flex-wrap">
                <span className="text-green-500 mr-1 sm:mr-2">➜</span>
                <span className="text-blue-400 mr-1 sm:mr-2">~</span>
                <span className="text-white font-semibold break-all">{item.content}</span>
              </div>
            ) : (
              <div className="text-zinc-300 pl-4 sm:pl-6 whitespace-pre-wrap leading-relaxed font-light break-words">
                {item.content.map((line, i) => (
                  <div key={i} className="mb-0.5">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Input Prompt - Responsive */}
        <div className="flex items-center text-zinc-300 mt-2 flex-wrap gap-y-1">
          {/* Full prompt for larger screens */}
          <span className="hidden sm:inline text-green-500 font-bold">ridwan@portofolio</span>
          <span className="hidden sm:inline text-white">:</span>
          {/* Short prompt for mobile */}
          <span className="sm:hidden text-green-500 font-bold">$</span>
          <span className="hidden sm:inline text-blue-400 font-bold">~</span>
          <span className="hidden sm:inline text-white mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-white flex-1 min-w-0 focus:ring-0 placeholder-zinc-600 text-xs sm:text-sm md:text-base ml-1 sm:ml-0"
            autoFocus
            spellCheck="false"
            autoComplete="off"
            placeholder={isTyping ? "..." : ""}
            disabled={isTyping}
          />
          {!isTyping && (
            <span className="w-1.5 sm:w-2 h-4 sm:h-5 bg-zinc-400 animate-pulse ml-1 shrink-0" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
