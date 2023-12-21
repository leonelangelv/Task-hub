export const image_icon = (color = 'black') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="141" height="124" viewBox="0 0 141 124" fill="none">
  <path d="M0 18.4247C0 8.72717 7.88443 0.842739 17.582 0.842739H123.074C132.772 0.842739 140.656 8.72717 140.656 18.4247V106.335C140.656 116.032 132.772 123.917 123.074 123.917H17.582C7.88443 123.917 0 116.032 0 106.335V18.4247ZM88.9539 47.6823C87.7177 45.8691 85.6848 44.7977 83.5145 44.7977C81.3442 44.7977 79.2838 45.8691 78.0751 47.6823L54.1745 82.7364L46.8945 73.6432C45.6308 72.0773 43.7352 71.1707 41.7573 71.1707C39.7793 71.1707 37.8563 72.0773 36.62 73.6432L19.038 95.6207C17.4446 97.5987 17.1425 100.318 18.2413 102.599C19.3402 104.879 21.6478 106.335 24.1753 106.335H50.5483H59.3393H116.481C118.926 106.335 121.178 104.989 122.305 102.818C123.431 100.648 123.294 98.0382 121.92 96.0328L88.9539 47.6823ZM30.7685 44.7977C34.2658 44.7977 37.6198 43.4085 40.0928 40.9355C42.5657 38.4626 43.955 35.1085 43.955 31.6112C43.955 28.114 42.5657 24.7599 40.0928 22.287C37.6198 19.814 34.2658 18.4247 30.7685 18.4247C27.2712 18.4247 23.9172 19.814 21.4442 22.287C18.9713 24.7599 17.582 28.114 17.582 31.6112C17.582 35.1085 18.9713 38.4626 21.4442 40.9355C23.9172 43.4085 27.2712 44.7977 30.7685 44.7977Z" fill="${color}"/>
</svg>`;

  const base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};