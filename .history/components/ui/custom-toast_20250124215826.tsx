import { toast } from "sonner";
import { Check, X, AlertCircle } from "lucide-react";

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
}

export const showToast = ({ message, type = 'success' }: ToastProps) => {
    toast(message, {
        className: 'bg-[#0a0f1c] border border-white/10 text-white',
        position: 'bottom-right',
        duration: 5000,
        icon: type === 'success' ? 
            <Check className="w-5 h-5 text-[#48CAE4]" /> : 
            <AlertCircle className="w-5 h-5 text-red-400" />,
        style: {
            backgroundColor: '#0a0f1c',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
        },
    });
}; 