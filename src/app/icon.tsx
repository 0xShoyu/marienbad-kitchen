import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 20,
        background: "#B93A32", 
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "6px", // 圓角
        fontFamily: "serif",
        border: "1px solid rgba(0,0,0,0.1)", 
      }}
    >
      食
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
