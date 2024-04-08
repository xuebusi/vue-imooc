import { ElNotification } from 'element-plus'

export default function toast(message, type = 'success') {
    ElNotification({
        message,
        type,
        duration: 3000,
    })
}