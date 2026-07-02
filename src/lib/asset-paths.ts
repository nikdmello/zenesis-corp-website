const currentAssetVersion = "20260702a";

export function versionedAssetPath(path: string, version = currentAssetVersion) {
  return `${path}?v=${version}`;
}
