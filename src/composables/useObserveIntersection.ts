export const useObserveIntersectionsAnimation = (htmlElementSelector: string, firstAnimationClass: string, secondAnimationClass: string) => {
  onMounted(() => {
    const sections = document.querySelectorAll(htmlElementSelector) as unknown as HTMLElement[]; // Select the LogoLine section
    sections.forEach((section, idx) => {
      if (idx !== 0) { 
        section.style.opacity = '0%';
      }
      
      if (section) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && idx !== 0) {
              section.style.opacity = '100%'
              idx % 2 === 0 ? section.classList.add(firstAnimationClass) : section.classList.add(secondAnimationClass)
            }
          })
        }, 
        { 
          threshold: 0.25 // Ensures full visibility
        })
        observer.observe(section);
      }
    })
  })
}