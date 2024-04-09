import { ElNotification } from 'element-plus'

const toast = (message, type = 'success') => {
    ElNotification({
        message,
        type,
        duration: 3000,
    })
}

export default toast