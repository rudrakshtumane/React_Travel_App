import Middle from "./components/Middle"
import Navbar from "./components/Navbar"


function App() {
 const destinations = [{dID: 1, dName:'Bora Bora, French Polynesia', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world2.png', dDescription:'Northwest of Tahiti in French Polynesia, in the South Pacific, lies a little island known as Bora Bora. It isnt easy to imagine any location on Earth with such a combination of nature and beauty.'},
  {dID: 2, dName:'Maui, Hawaii', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world3.png', dDescription:'Gorgeous beaches, surfing, spectacular scenery, and a lovely climate are some of Maui most prominent features. The island is situated west of the Big Island of Hawaii, about 68 miles away from Oahu. The Alenuihaha Channel separates the two islands. In the Hawaiian chain, it is the second largest island. Maui is the island in Hawaii that receives the most visitors, following Oahu.'},
  {dID: 3, dName:'Phuket, Thailand', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world4.png', dDescription:'Phuket is equipped with gorgeous golden sand beaches, a colorful coastline crammed with shacks, colorful chairs and umbrellas, adventurous water sports, amusements, and mind-blowing nightlife. The Thai city ranks very highly among the popular holiday destinations in terms of features like tourist friendliness, hotels, basic amenities, and accessibility, offering a pleasurable and fascinating vacation.'},
  {dID: 4, dName:'Bali, Indonesia', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world5.png', dDescription:'Bali is among the most adventurous tourism locales in the entire Indonesian archipelago. The senses are awakened by a trip there. The delightful fragrance of clove oil and incense fills the entire room. On crowded sidewalks, ancient gamelan music jangles above the whir of motorbikes as peanuts sizzle at sidewalk stalls.'},
  {dID: 5, dName:' Santorini, Greece', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world9.png', dDescription:'Santorini is popular because of its breathtaking sunsets, pearly white houses covered in bougainvillea, blue-domed churches, and charming windmills. This charming Greek destination attracts bachelors and newlyweds from all over the world who are thrilled to see the world-famous Oia sunsets, take a hot springs bath, savor local cuisine, and relax in luxurious facilities.'},
  {dID: 6, dName:'Niagara Falls', dImage:'https://static.javatpoint.com/top10-technologies/images/top-10-places-to-visit-in-the-world10.png', dDescription:'In Canada, Niagara Falls sits near the location of Niagara Falls, one of Canada most popular tourist destinations, on the edge of the Niagara Gorge. Its advantageous position has elevated it to the top of Canada most visited destinations.'},
  {dID: 7, dName:'Anse Source d-Argent, Seychelles', dImage:'https://www.travelandleisure.com/thmb/gGi6BJIE1ZhCIKCrk8DQEPDf_jo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anse-source-dargent-seychelles-MOSTBEAUTIFUL0921-6086f0b731944230a748d0f1fec13acf.jpg', dDescription:'Seychellois beach is like splitting hairs, but Anse Source d-Argent gets extremely high marks for its sugar-white sand framed by dramatic granite boulders and sparkling aquamarine water. The sweet shoreline is relatively secluded from the resort crowds on La Digue Island.'},
  {dID: 8, dName:'Victoria Falls', dImage:'https://www.travelandleisure.com/thmb/18Z3yXaDJFxtr4aTWoik6zqg96Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/victoria-falls-zimbabwe-zambia-MOSTBEAUTIFUL0921-0c0230b660a04cbabe6a1536df38a313.jpg', dDescription:'One of the seven natural wonders of the world, Victoria Falls spans the Zimbabwe and Zambia borders. "The smoke that thunders," as it is known to locals, and its surroundings, are hubs for white-water rafting, helicopter rides, big-game safaris, and other thrilling adventures.'},
  {dID: 9, dName:'Lake Como, Italy', dImage:'https://www.travelandleisure.com/thmb/i2BW2xguQ9e3ThfWyeIc9SWVBpM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg', dDescription:'Lake Como has been one of Italy most popular vacation spots since the time of the Roman emperors. This unabashedly high-rolling resort area still attracts a posh crowd with its lush gardens, cinematic palaces and villas, and sun-soaked alpine shores. Take the funicular to the tiny village of Brunate for an amazing panorama.'},

 ]

  return (
    <>
    <Navbar/>
    <Middle data={destinations}/>
    </>
  )
}

export default App
