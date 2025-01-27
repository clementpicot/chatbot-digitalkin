// This component has been generated with claude.ai
// I revamped some of it but it is mostly intact

"use client";

import React, { useCallback, useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  onComplete = () => {},
  speed = 50,
}) => {
  const [characters, setCharacters] = useState<string[]>([]);

  // Optimized typing mechanism
  const typeText = useCallback(() => {
    // Ensure we start with an array of the correct length, filled with empty strings
    const initialCharacters = new Array(text.length).fill("");

    // Track the current index outside of state updates to ensure accuracy
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        // Create a new array for each update to trigger re-render
        const newCharacters = [...initialCharacters];

        // Fill characters up to the current index
        for (let i = 0; i <= currentIndex; i++) {
          newCharacters[i] = text[i];
        }

        // Update state and increment index
        setCharacters(newCharacters);
        currentIndex++;

        // Use dynamic timing based on the speed parameter
        // Lower speed means faster typing
        setTimeout(typeNextCharacter, Math.max(1, speed));
      } else {
        onComplete();
      }
    };

    // Start typing immediately
    typeNextCharacter();
  }, [text, speed, onComplete]);

  // Trigger typing when text changes
  useEffect(() => {
    typeText();
  }, [typeText]);

  return (
    <span>
      {characters.map((char, index) =>
        char !== "" ? (
          <span
            key={index}
            className="animate-fade opacity-0 inline-block"
            style={{
              animationDelay: `${index * 0.001}s`,
              animationFillMode: "forwards",
            }}
          >
            {char}
          </span>
        ) : null
      )}
    </span>
  );
};

export default TypingEffect;
