import { toast } from "sonner";
import { Check, X, AlertCircle } from "lucide-react";

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
}

export const showToast = ({ message, type = 'success' }: ToastProps) => {
    toast(message, {
        className: `
            bg-[#0a0f1c]/95 
            border border-white/10 
            text-white 
            rounded-xl 
            shadow-lg 
            backdrop-blur-lg
        `,
        position: 'bottom-right',
        duration: 5000,
        icon: type === 'success' ? 
            <Check className="w-5 h-5 text-[#48CAE4] animate-fade-in" /> : 
            <AlertCircle className="w-5 h-5 text-red-400 animate-fade-in" />,
        style: {
            backgroundColor: 'rgba(10, 15, 28, 0.95)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            padding: '16px',
            minWidth: '300px',
        },
    });
}; 