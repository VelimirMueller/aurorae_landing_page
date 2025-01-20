const iconTextsChat: {text: string, highlightText: string}[] = [
  { text: '100%', highlightText: 'customizable' },
  { text: 'Fully', highlightText: 'data compliant' },
  { text: 'Completely', highlightText: 'independent' }
]

const iconTextsAi: {text: string, highlightText: string}[] = [
  { text: 'Fine tuning', highlightText: 'ready' },
  { text: 'Pre-trained', highlightText: 'model' },
  { text: 'Powerful', highlightText: 'classification' }
]

const iconDescriptionsChat: {id: number, text: string, icon: string}[] = [
  { id: 0, text: 'Chat with a customizable AI with lots of knowledge.', icon: 'mdi-chat-processing-outline' },
  { id: 1, text: 'Host your own AI Tools and keep control.', icon: 'mdi-chat-processing-outline' },
  { id: 0, text: 'Data is protected because it stays with you', icon: 'mdi-chat-processing-outline' }
]

const iconDescriptionsImage: {id: number, text: string, icon: string}[] = [
  { id: 0, text: 'Classify your images automatically.', icon: 'mdi-image-multiple-outline' },
  { id: 1, text: 'Handle your product images with AI.', icon: 'mdi-image-multiple-outline' },
  { id: 0, text: 'Model can be refined with Aurorae Trainer', icon: 'mdi-image-multiple-outline' }
]

const iconDescriptionsDashboard: {id: number, text: string, icon: string}[] = [
  { id: 0, text: 'Complete overview of your aurorae application.', icon: 'mdi-monitor-dashboard' },
  { id: 1, text: 'Easy user handling.', icon: 'mdi-monitor-dashboard' },
  { id: 0, text: 'Database interaction included.', icon: 'mdi-monitor-dashboard' }
]

const iconDescriptionsTrainer: {id: number, text: string, icon: string}[] = [
  { id: 0, text: 'Classify your images automatically.', icon: 'mdi-arrow-top-right-bold-box-outline' },
  { id: 1, text: 'Handle your product images with AI.', icon: 'mdi-arrow-top-right-bold-box-outline' },
  { id: 0, text: 'Model can be refined with Aurorae Trainer', icon: 'mdi-arrow-top-right-bold-box-outline' }
]

export {
  iconTextsChat,
  iconTextsAi,
  iconDescriptionsChat,
  iconDescriptionsImage,
  iconDescriptionsDashboard,
  iconDescriptionsTrainer
}
