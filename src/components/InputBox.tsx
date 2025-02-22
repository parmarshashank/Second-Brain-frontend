export function InputBox({ placeholder, reference}:{ placeholder?: string, reference?: any}) {
    return(
        <input 
            type="text" 
            className="border border-gray-200 rounded-lg p-3 w-full mt-2 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 placeholder:text-gray-400"
            placeholder={placeholder} 
            ref={reference}
        />
    );
}