const externalPathPattern = /^(?:[a-z]+:)?\/\//i;

export function assetPath(path) {
  if (!path || externalPathPattern.test(path) || path.startsWith("data:") || path.startsWith("#")) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (path.startsWith(normalizedBase)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}

export function assetUrl(path) {
  return `url("${assetPath(path)}")`;
}

export function resolveAssetUrls(value) {
  if (typeof value !== "string") {
    return value;
  }

  return value.replace(/url\((['"]?)(\/assets\/[^'")]+)\1\)/g, (_, _quote, path) =>
    assetUrl(path),
  );
}
