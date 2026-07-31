const currentAssetVersion = "20260731a";

export function versionedAssetPath(path: string, version = currentAssetVersion) {
  return `${path}?v=${version}`;
}
