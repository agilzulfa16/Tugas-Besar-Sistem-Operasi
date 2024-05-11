const navigasi = `
<nav class="bg-green-700">
    <div class="container flex">
        <!-- <div class="px-8 py-4 bg-green-600 md:flex items-center cursor-pointer relative group hidden">
            <span class="text-white">
                <i class="fa-solid fa-bars"></i>
            </span>
            <span class="capitalize ml-2 text-white hidden">All Categories</span> -->

            <!-- dropdown -->
            <!-- <div
                class="absolute w-full left-0 top-full bg-white shadow-xl-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Bed</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/office.svg" alt="office" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">office</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                    <img src="../assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain">
                    <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
            </div> -->
        <!-- </div> -->

        <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div class="flex items-center space-x-6 capitalize">
                <a href="../index.html" class="text-gray-200 hover:text-white transition">Home</a>
                <a href="shop.html" class="text-gray-200 hover:text-white transition">Shop</a>
                <a href="#" class="text-gray-200 hover:text-white transition">Bantuan</a>
                <a href="#" class="text-gray-200 hover:text-white transition">Lacak Pesanan</a>
            </div>
            <a href="login.html" class="text-gray-200 hover:text-white transition">Masuk/Daftar</a>
        </div>
    </div>
</nav>
<!-- header -->
<header class="py-6 shadow-xl-sm bg-white">
    <div class="container flex items-center justify-between">
        <a href="../index.html">
            <img src="../assets/images/Logo.png" alt="Logo" class="w-32">
        </a>



        <div class="flex items-center space-x-10">
        
            <a href="#" class="text-center text-gray-700 hover:text-green-600 transition relative">
                <div class="text-2xl">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div class="text-lg leading-3">Categories</div>

            </a>
            <a href="#" class="text-center text-gray-700 hover:text-green-600 transition relative">
                <div class="text-2xl">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="text-lg leading-3">Our Packages</div>
            </a>
            <a href="#" class="text-center text-gray-700 hover:text-green-600 transition relative">
                <div class="text-2xl">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="text-lg leading-3">Sale</div>
            </a>
        </div>
        <div class="w-full max-w-xs flex justify-end">
            <form action="" class="w-full max-w-xs flex justify-end">
                <span class="absolute left-4 top-3 text-lg text-gray-400">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>

                <input type="text" name="search" id="search"
                    class="w-72 h-10 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                    placeholder="search"><button type="submit"
                    class="items-center text-black px-8 rounded-r-md hover:bg-transparent hover:text-green-600 transition hidden md:flex"><img src="../assets/images/icons/search.svg" alt=""></button>

            </form>
            
        </div>
        <a href="checkout.html">
        <img src="../assets/images/icons/cart.svg">
    </a>


    </div>
</header>
<!-- ./header -->
`;

foot = `  <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
<div class="container grid grid-cols-3">
    <div class="col-span-1 space-y-8 mr-2">
        <img src="../assets/images/Logo.png" alt="logo" class="w-72">
        
        <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500"><i
                    class="fa-brands fa-facebook-square"></i></a>
            <a href="#" class="text-gray-400 hover:text-gray-500"><i
                    class="fa-brands fa-instagram-square"></i></a>
            <a href="#" class="text-gray-400 hover:text-gray-500"><i
                    class="fa-brands fa-twitter-square"></i></a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <i class="fa-brands fa-github-square"></i>
            </a>
        </div>
    </div>

    <div class="col-span-2 grid grid-cols-2 gap-8">
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">UI/UX Designer</h3>
                <div class="mt-4 space-y-4">
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Novia Nuraeni</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Dhita Dwinandra</a>
                   
                </div>
            </div>

            <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Front-End Developer</h3>
                <div class="mt-4 space-y-4">
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Agil Zulfa</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Adrian Syah</a>
                    
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Back-End Developer</h3>
                <div class="mt-4 space-y-4">
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Atthariq InsanulHaq</a>
                  
                    
                </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Others</h3>
                <div class="mt-4 space-y-4">
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Silvia Farida</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Maharani Argyanti</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Rian Nurdiana</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Hilda Oktaviani</a>
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900 block">Dzalfa Salsabilla</a>
                </div>
            </div>

        </div>
    </div>
</div>
</footer>
<!-- ./footer -->
        

         

<!-- copyright -->
<div class="bg-gray-800 py-6">
<div class="container flex items-center justify-between">
    <p class="text-white">&copy; flipsxvxvn - All Right Reserved</p>
    <div>
        <img src="../assets/images/methods.png" alt="methods" class="h-5">
    </div>
</div>
</div>
<!-- ./copyright -->`;

