const currentAssetVersion = "20260728c";

export function versionedAssetPath(path: string, version = currentAssetVersion) {
  return `${path}?v=${version}`;
}
