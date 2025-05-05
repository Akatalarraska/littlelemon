import Jumbotron from './Jumbotron';

function Home(){
    return(
        <main className="container mx-auto p-4">
        <Jumbotron />
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold">Little Lemon</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-black text-white px-6 py-2 mt-4 rounded">Reserve a Table</button>
        </section>
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center">Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {["Greek Salad", "Bruschetta", "Lemon Dessert"].map((item, index) => (
              <div key={index} className="border p-4 rounded-lg text-center">
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="text-gray-600">Description of {item} goes here.</p>
                <button className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded">Order Now</button>
              </div>
            ))}
          </div>

        </section>
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

            {[1, 2, 3].map((_, index) => (
              <div key={index} className="border p-4 rounded-lg text-center">
                <p className="text-gray-600">"Amazing experience!"</p>
                <span className="font-bold">Customer {index + 1}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
}

export default Home;
