// Debounce function to optimize API calls
export const debounce = (fn: Function, delay = 500) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
};
  
export const shareContent = async (
  title: string,
  text: string,
  url: string,
  onShareSuccess?: () => void,
  onShareError?: (error: Error) => void
) => {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      onShareSuccess?.();
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error sharing:', error);
        onShareError?.(error);
      }
    }
  } else {
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(url);
      onShareSuccess?.();
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      onShareError?.(error as Error);
    }
  }
};
