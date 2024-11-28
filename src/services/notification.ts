import { Notify } from "notiflix"

const notification = {  
  error: (text:string) => Notify.failure(text),
  warn: (text: string) => Notify.warning(text),
  success: (text:string) => Notify.success(text)
}

export default notification