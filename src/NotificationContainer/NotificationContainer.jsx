import "./NotificationContainer.css"
import { NotificationButtons } from "../NotificationButtons/NotificationButtons"
export const NotificationContainer = () => {
  return (
    <main className='notification-container'>
        <NotificationButtons type="success" text="Success"/>
        <NotificationButtons type="info" text="Info"/>
        <NotificationButtons type="warning" text="Warning"/>
        <NotificationButtons type="error" text="Error"/>
    </main>
  )
}
