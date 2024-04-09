import { ElNotification } from 'element-plus'
import nprogress from 'nprogress'

export function toast(message, type = 'success') {
    ElNotification({
        message,
        type,
        duration: 3000,
    })
}

export function showFullLoading() {
    nprogress.start()
}

export function hideFullLoading() {
    nprogress.done()
}