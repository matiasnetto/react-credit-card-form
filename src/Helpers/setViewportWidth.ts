const setViewportWidth = () => {
  console.log('FUNCIONAA');
  const metaViewportTag = document.querySelector('meta[name=viewport]');
  metaViewportTag?.setAttribute('content', `height=${window.innerHeight}px, width=device-width, initial-scale=1`);
};

export default setViewportWidth;
