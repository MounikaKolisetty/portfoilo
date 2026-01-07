import React, { useRef, useState, MouseEvent, useEffect } from "react";
import { Card } from "./card";
import { cn } from "../../utils/utils.ts";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [primaryRgb, setPrimaryRgb] = useState("168, 85, 247"); // Default blue
  const GREEN_RGB = "34, 197, 94";   // emerald-500
  const PINK_RGB = "236, 72, 153";   // pink-500


  // Get primary RGB color from CSS variable
  useEffect(() => {
    const updatePrimaryColor = () => {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      const primaryRgbValue = computedStyle
        .getPropertyValue("--primary-rgb")
        .trim();
      if (primaryRgbValue) {
        setPrimaryRgb(primaryRgbValue);
      }
    };

    updatePrimaryColor();
    // Update on theme change
    const observer = new MutationObserver(updatePrimaryColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset position immediately to prevent full border highlight
    setMousePosition(null);
  };

  // Calculate spotlight position and size
  const spotlightSize = 150; // Size of the spotlight in pixels
  const spotlightX = mousePosition?.x ?? -1000;
  const spotlightY = mousePosition?.y ?? -1000;

  // Create radial gradient for the spotlight effect with blur
  const spotlightGradient = `radial-gradient(${spotlightSize}px ${spotlightSize}px at ${spotlightX}px ${spotlightY}px, rgba(${GREEN_RGB}, 0.55), rgba(${PINK_RGB}, 0.35) 45%, transparent 70%)`;

  // Calculate border spotlight size (smaller for border)
  const borderSpotlightSize = 120;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
      {...props}
    >
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          className
        )}
      >
        {/* Spotlight overlay for background - blurred */}
        {isHovering && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 overflow-hidden rounded-lg"
            style={{
              background: spotlightGradient,
              opacity: 1,
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />
        )}

        {/* Border highlight effect - only near cursor */}
        {mousePosition && (
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              top: "0px",
              left: "0px",
              right: "0px",
              bottom: "0px",
              borderRadius: "inherit",
              border: `1px solid rgba(${primaryRgb}, 1)`,
              opacity: isHovering ? 1 : 0,
              filter: "blur(1px)",
              zIndex: 1,
              WebkitMaskImage: `radial-gradient(${borderSpotlightSize}px ${borderSpotlightSize}px at ${spotlightX}px ${spotlightY}px, white 30%, transparent 65%)`,
              maskImage: `radial-gradient(${borderSpotlightSize}px ${borderSpotlightSize}px at ${spotlightX}px ${spotlightY}px, white 30%, transparent 65%)`,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </Card>
    </div>
  );
};

export default SpotlightCard;