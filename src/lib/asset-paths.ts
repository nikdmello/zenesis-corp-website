const currentAssetVersion = "20260728b";

export function versionedAssetPath(path: string, version = currentAssetVersion) {
  return `${path}?v=${version}`;
}
