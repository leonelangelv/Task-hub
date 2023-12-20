export const search_icon = (color = 'black') => {
  const svg = `<svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M23.8672 11.9076C23.8672 14.5243 23.0178 16.9415 21.5869 18.9025L28.8041 26.1254C29.5167 26.838 29.5167 27.9953 28.8041 28.7079C28.0915 29.4205 26.9342 29.4205 26.2216 28.7079L19.0044 21.485C17.0434 22.9216 14.6262 23.7653 12.0096 23.7653C5.45934 23.7653 0.151901 18.4579 0.151901 11.9076C0.151901 5.35743 5.45934 0.0499878 12.0096 0.0499878C18.5598 0.0499878 23.8672 5.35743 23.8672 11.9076ZM12.0096 20.1168C13.0876 20.1168 14.1551 19.9045 15.1511 19.4919C16.147 19.0794 17.052 18.4747 17.8143 17.7124C18.5766 16.9501 19.1813 16.0451 19.5938 15.0492C20.0064 14.0532 20.2187 12.9857 20.2187 11.9076C20.2187 10.8296 20.0064 9.76212 19.5938 8.76614C19.1813 7.77016 18.5766 6.86519 17.8143 6.1029C17.052 5.34061 16.147 4.73593 15.1511 4.32338C14.1551 3.91083 13.0876 3.6985 12.0096 3.6985C10.9315 3.6985 9.86403 3.91083 8.86805 4.32338C7.87207 4.73593 6.9671 5.34061 6.20481 6.1029C5.44252 6.86519 4.83784 7.77016 4.42529 8.76614C4.01275 9.76212 3.80041 10.8296 3.80041 11.9076C3.80041 12.9857 4.01275 14.0532 4.42529 15.0492C4.83784 16.0451 5.44252 16.9501 6.20481 17.7124C6.9671 18.4747 7.87207 19.0794 8.86805 19.4919C9.86403 19.9045 10.9315 20.1168 12.0096 20.1168Z'
        fill='${color}'
      />
    </svg>`;
  const base64 = btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
};
