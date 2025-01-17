export const useObserveIntersectionsAnimation = (htmlElementSelector: string, firstAnimationClass: string, secondAnimationClass: string) => {
  onMounted(() => {
    const sections = document.querySelectorAll(htmlElementSelector) as unknown as HTMLElement[]; // Select the LogoLine section
    
    sections.forEach((section, idx) => {
      if (idx !== 0) { 
        section.style.opacity = '0%';
      } 
      
      const observer = observerFactory(section, idx, firstAnimationClass, secondAnimationClass)
      observer.observe(section)
    })
  })
}

const observerFactory = (section: HTMLElement, index: number, firstAnimationClass: string, secondAnimationClass: string) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (index !== 0) { setObserverAnimation(section, index, firstAnimationClass, secondAnimationClass) }
      }
    })
  }, 
  { 
    threshold: 0.25 // Ensures full visibility
  })
}

const setObserverAnimation = (sectionElement: HTMLElement, sectionIndex: number, firstAnimationClass: string, secondAnimationClass: string): void => {
  sectionElement.style.opacity = '100%'
  sectionIndex % 2 === 0 ? sectionElement.classList.add(firstAnimationClass) : sectionElement.classList.add(secondAnimationClass)
}