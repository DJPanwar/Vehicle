import { Bell } from 'lucide-react';
function Header() {
    return (
        <div>
            <header className="bg-white shadow-md shadow-slate-400 balck px-10 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
                            MOBILIX
                        </div>
                    </div>
                    <div className="relative">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            99+
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header




