import React from "react";

import "./hero_text.css";

const HeroText: React.FC = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const toPortfolio = () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  const toBlog = () => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
  
  React.useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const els = document.querySelectorAll<HTMLElement>(".styled");
    els.forEach(el => el.onmouseover = e => {
      let iteration = 0;

      clearInterval(interval);
      interval = setInterval(() => {
        const t = e.target! as HTMLElement
        t.innerText = t.innerText
        .split("")
        .map((_, index) => {
          if(index < iteration) {
            return t.dataset.value?.charAt(index) ?? ''
          }
      
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
          
        if(iteration >= (t.dataset.value?.length ?? 0)){ 
          clearInterval(interval);
        }
          
        iteration += 1 / 3;
      }, 20);
    })
  
    els.forEach(el => el.onmouseleave = e => {
      console.log("mouseleave");
      const t = e.target! as HTMLElement
      t.innerText =  t.dataset.value ?? '';
    })
  }, []);

  return (
    <div id="hero-text">
      <div className="line">
        <div className="word">Zak</div>
        <div className="word">Dowsett</div>
      </div>
      <div className="line">
        <div className="word">FullStack</div>
        <div className="word">Dev</div>
      </div>
      <div className="line">
        <a data-value="CV" className="word styled" href="/resume.pdf" target="_blank">CV</a>
        <div data-value="PORTFOLIO" className="word styled" onClick={toPortfolio}>Portfolio</div>
      </div>
      <div className="line">
        <a data-value="LINKEDIN" className="word styled" href="https://linkedin.com/in/zak-dowsett-4a7455131/" target="_blank">LinkedIn</a>
        <a data-value="BLOG" className="word styled" onClick={toBlog}>Blog</a>
      </div>
    </div>
  );
}

export default HeroText;