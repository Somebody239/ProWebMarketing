"use client";

interface PlaceholderImageProps {
  text: string;
  width: number;
  height: number;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export function PlaceholderImage({
  text,
  width,
  height,
  bgColor = "rgba(80, 98, 177, 0.2)",
  textColor = "rgba(80, 98, 177, 1)",
  className = "",
}: PlaceholderImageProps) {
  // Generate initials from the text
  const initials = text
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `${Math.min(width, height) / 3}px`,
    fontWeight: "bold" as const,
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle} className={className}>
      {initials}
    </div>
  );
}

export function ClientLogo({
  name,
  width = 120,
  height = 40,
  className = "",
}: {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <PlaceholderImage
      text={name}
      width={width}
      height={height}
      bgColor="rgba(80, 98, 177, 0.1)"
      textColor="rgba(80, 98, 177, 0.8)"
      className={`rounded-md ${className}`}
    />
  );
}

export function TestimonialAvatar({
  name,
  size = 48,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <PlaceholderImage
      text={name}
      width={size}
      height={size}
      bgColor="rgba(80, 98, 177, 0.2)"
      textColor="rgba(80, 98, 177, 1)"
      className={`rounded-full ${className}`}
    />
  );
}
