const currentAssetVersion = "20260606b";

export function versionedAssetPath(path: string, version = currentAssetVersion) {
  return `${path}?v=${version}`;
}
