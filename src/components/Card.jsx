function Card({image, category, title, price, className, style, desc}) {
  return (
    <div className={`relative lg:w-1/4 md:w-1/3 sm:w-1/2 w-full shadow-sm ${className}`} style={style}>
  
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-xl font-medium   w-3/4 m-auto truncate-words">
            {title}
          </h2>
          <p className="mt-1 w-3/4 m-auto break-all truncate-words ">${desc}</p>
          <p className="absolute -top-5 hover:top-5 transition-[top] duration-300 right-5 ">${price}</p>

        </div>
      </div>
  );
}
export default Card