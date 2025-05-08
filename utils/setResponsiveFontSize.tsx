export default function setResponsiveFontSize(){
    const deviceWidth = document.documentElement.clientWidth;
    const ratio = deviceWidth > 768 ? 144 : 37.5;
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  
    const fz = deviceWidth <= 1440
      ? ~~(width * 100000 / ratio) / 10000
      : 100;
  
        const htmlEl = document.documentElement;
        htmlEl.style.fontSize = `${fz}px`;
};