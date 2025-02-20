export function InputBox({ placeholder, reference}:{ placeholder?: string, reference?: any}) {
    return(
        <input type="text" className="border border-gray-100 rounded-md p-2 w-full pt mt-1" placeholder={placeholder} ref={reference}></input>
    );
}