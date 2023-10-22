export default function ListViewButton() {
    return (
        <a href="#_" class="m-2 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-green-50 text-green-600 inline-block">
        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
        <span class="relative group-hover:text-white">
            List
        </span>
        </a>
    );
}