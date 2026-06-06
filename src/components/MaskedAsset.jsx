export function MaskedAsset({
  image,
  backgroundImage,
  mask,
  className = "",
  backgroundSize = "contain",
  backgroundRepeat = "no-repeat",
  backgroundPosition = "center",
  backgroundBlendMode,
  backgroundColor,
  maskSize,
  maskPosition,
  maskRepeat = "no-repeat",
  rotate = 0,
  style = {},
}) {
  const resolvedBackgroundImage = backgroundImage ?? (image ? `url(${image})` : undefined);

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        "--asset-rotate": `${rotate}deg`,
        backgroundImage: resolvedBackgroundImage,
        backgroundColor,
        backgroundRepeat,
        backgroundSize,
        backgroundPosition,
        backgroundBlendMode,
        WebkitMaskImage: mask ? `url(${mask})` : undefined,
        maskImage: mask ? `url(${mask})` : undefined,
        WebkitMaskRepeat: mask ? maskRepeat : undefined,
        maskRepeat: mask ? maskRepeat : undefined,
        WebkitMaskSize: mask ? maskSize ?? "100% 100%" : undefined,
        maskSize: mask ? maskSize ?? "100% 100%" : undefined,
        WebkitMaskPosition: mask ? maskPosition ?? "center" : undefined,
        maskPosition: mask ? maskPosition ?? "center" : undefined,
        WebkitMaskSourceType: mask ? "luminance" : undefined,
        maskMode: mask ? "luminance" : undefined,
        maskType: mask ? "luminance" : undefined,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
}
