export function exportTextFile(text: string, fileName: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName + ".txt";
  link.click();

  URL.revokeObjectURL(url);
}