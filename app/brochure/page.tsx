import Image from "next/image"
import "./brochure.css"

export default function BrochurePage() {
  return (
    <main className="brochure-root">
      <section className="brochure-sheet">
        <div className="brochure-fold">

          {/* PANEL 1 — COVER */}
          <article className="brochure-panel cover-panel">
            <div className="logo-strip">
              <Image src="/images/logo-transparent.png" alt="Villa Kathreyna logo" width={190} height={64} className="logo-main" />
              <Image src="/images/emblem-mono-white.png" alt="Villa Kathreyna emblem" width={44} height={44} className="logo-emblem" />
            </div>

            <p className="eyebrow">Premium Event & Leisure Destination</p>
            <h1>Villa Kathreyna</h1>
            <p className="cover-subtitle">Event Place & Resort</p>

            <div className="badge-row">
              <span className="pill">Resort</span>
              <span className="pill">Cafe & Resto</span>
              <span className="pill">Event Styling</span>
              <span className="pill">Catering</span>
            </div>

            <div className="brochure-image xl" data-caption="Villa Kathreyna Main Facade">
              <Image src="/images/materials/villa.jpg" alt="Villa Kathreyna exterior" fill className="object-cover" />
            </div>

            <p className="lead">
              Royal celebrations, lush resort, and great food — all in one elegant destination in Cam. Sur.
            </p>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image xs" data-caption="Garden and Pool">
                <Image src="/images/materials/garden-pool-full.png" alt="Garden and pool" fill className="object-cover" />
              </div>
              <div className="brochure-image xs" data-caption="Event Hall Exterior">
                <Image src="/images/materials/hall-full.png" alt="Event hall" fill className="object-cover" />
              </div>
            </div>

            <div className="highlight-card">
              <p className="mini-label">All-Exclusive Access Package</p>
              <p className="price">PHP 25,000</p>
              <p className="mini-copy">22 hrs · 5 rooms · hall + pool + garden · setup for 50 pax</p>
            </div>

            <div className="contact-card">
              <p>📞 <strong>0977 627 1360</strong> &nbsp;|&nbsp; ☎️ <strong>054 341 3605</strong></p>
              <p>✉️ book@villakathreyna.com</p>
              <p>🌐 www.villakathreyna.com</p>
              <p>📍 Zone 5, Planza, San Fernando, Cam. Sur</p>
            </div>
          </article>

          {/* PANEL 2 — BRANDS OVERVIEW */}
          <article className="brochure-panel">
            <h2>Three Brands, One Destination</h2>

            <div className="brochure-image md" data-caption="Resort Grounds View">
              <Image src="/images/materials/garden-pool.png" alt="Garden and pool area" fill className="object-cover" />
            </div>

            <h3>🏩 Villa Kathreyna Event Place & Resort</h3>
            <ul>
              <li>Walk-in: PHP 120 adult · PHP 80 kids (6–12) · 7 AM–3 PM</li>
              <li>Night swim: PHP 150 adult · PHP 100 kids · 4 PM–12 MN</li>
              <li>Rooms: PHP 1,500 to PHP 4,500 (22-hr stay)</li>
              <li>Venue packages: PHP 5,000 to PHP 26,000</li>
              <li>Pool, garden, hall, terrace & roof deck access</li>
            </ul>

            <div className="brochure-image xs" data-caption="Poolside Experience">
              <Image src="/images/materials/resort-pool.jpg" alt="Resort pool" fill className="object-cover" />
            </div>

            <div className="divider" />

            <h3>☕ La Bella Cafe & Resto Bar</h3>
            <ul>
              <li>Crispy Pata – PHP 750 · Orange Chicken – PHP 250</li>
              <li>Sisig – PHP 220 · Lomi Overload – PHP 199</li>
              <li>Espresso drinks: PHP 99–149 · Saver meals: PHP 99–215</li>
              <li>Burnt Basque Cheesecakes (whole cake & by slice)</li>
              <li>Pan Trays: PHP 899–1,299 · Smoothies: PHP 159</li>
            </ul>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image xs" data-caption="Crispy Pata Best Seller">
                <Image src="/images/food/crispy-pata.jpg" alt="Crispy pata" fill className="object-cover" />
              </div>
              <div className="brochure-image xs" data-caption="Mango Basque Cheesecake">
                <Image src="/images/cafe/mango-basque.png" alt="Mango basque cheesecake" fill className="object-cover" />
              </div>
            </div>

            <div className="divider" />

            <h3>🎊 RKreatioNs Event Styling & Catering</h3>
            <ul>
              <li>Catering: PHP 400 / 500 / 600 / 800 per head</li>
              <li>Silver · Gold · Diamond · Platinum tiers available</li>
              <li>Wedding, debut, birthday & baptism packages</li>
              <li>Styling add-ons: host, decor, photo & photobooth</li>
            </ul>

            <div className="brochure-image md" data-caption="RKreatioNs Catering Display">
              <Image src="/images/banners/catering.jpg" alt="Catering display" fill className="object-cover" />
            </div>
          </article>

          {/* PANEL 3 — QUICK REFERENCE & AMENITIES */}
          <article className="brochure-panel">
            <h2>Your Perfect Event Awaits</h2>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image sm" data-caption="Queen Suite">
                <Image src="/images/materials/queen.png" alt="Queen suite" fill className="object-cover" />
              </div>
              <div className="brochure-image sm" data-caption="King Suite">
                <Image src="/images/materials/king.png" alt="King suite" fill className="object-cover" />
              </div>
            </div>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image sm" data-caption="Princess Room">
                <Image src="/images/materials/princess.png" alt="Princess room" fill className="object-cover" />
              </div>
              <div className="brochure-image sm" data-caption="Duchess Room">
                <Image src="/images/materials/duchess.png" alt="Duchess room" fill className="object-cover" />
              </div>
            </div>

            <h3>Room Rates (22 hrs / 12 hrs)</h3>
            <ul>
              <li>Princess / Prince: PHP 1,500 / PHP 800</li>
              <li>Duchess: PHP 2,500 / PHP 1,500</li>
              <li>Queen Suite: PHP 3,500 / PHP 2,000</li>
              <li>King Suite: PHP 4,500 / PHP 2,500</li>
            </ul>

            <h3>Price Snapshot</h3>
            <div className="price-stack">
              <p><strong>All Exclusive Access:</strong> PHP 25,000</p>
              <p><strong>Catering per head:</strong> PHP 400 / 500 / 600 / 800</p>
              <p><strong>Wedding all-in:</strong> PHP 150K / 200K / 250K</p>
              <p><strong>RK Hall:</strong> PHP 5,000–10,000</p>
              <p><strong>Hall + Pool:</strong> PHP 10,000–15,000</p>
              <p><strong>Garden & Pool:</strong> PHP 8,000–23,000</p>
            </div>

            <div className="brochure-image md" data-caption="Wedding Venue Styling">
              <Image src="/images/materials/wedding.jpg" alt="Wedding venue setup" fill className="object-cover" />
            </div>

            <h3>Guest Amenities</h3>
            <ul>
              <li>Air-conditioned rooms · private bath · WiFi · breakfast for 2</li>
              <li>Pool & garden access for all room guests</li>
              <li>Tables, chairs, buffet setup & parking included</li>
              <li>Videoke, sound system & event coordination available</li>
              <li>Reservation fee: PHP 500 (non-refundable)</li>
            </ul>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image xs" data-caption="Birthday Setup">
                <Image src="/images/materials/birthday.jpg" alt="Birthday celebration" fill className="object-cover" />
              </div>
              <div className="brochure-image xs" data-caption="Private Party Setup">
                <Image src="/images/materials/party.jpg" alt="Party event" fill className="object-cover" />
              </div>
            </div>

            <div className="note">
              <p><strong>Book now:</strong> 0977 627 1360 · 054 341 3605</p>
              <p>book@villakathreyna.com · www.villakathreyna.com</p>
            </div>
          </article>
        </div>
      </section>

      <section className="brochure-sheet">
        <div className="brochure-fold">
          <article className="brochure-panel">
            <h2>Villa Kathreyna Event Place & Resort</h2>

            <h3>Rates and Access</h3>
            <ul>
              <li>Walk-in day (7 AM to 3 PM): PHP 120 adult, PHP 80 kids (6-12).</li>
              <li>Walk-in night (4 PM to 12 MN): PHP 150 adult, PHP 100 kids (6-12).</li>
              <li>Umbrella (4 pax): PHP 250.</li>
              <li>Poolside table (8 pax): PHP 400.</li>
              <li>Hall walk-in access (min. 20 pax + videoke): PHP 2,000.</li>
            </ul>

            <div className="brochure-image xs" data-caption="Resort Pool Access">
              <Image src="/images/materials/resort-pool.jpg" alt="Resort pool" fill className="object-cover" />
            </div>

            <h3>Room Accommodation (22 hrs / 12 hrs)</h3>
            <ul>
              <li>Princess Room: PHP 1,500 / PHP 800.</li>
              <li>Prince Room: PHP 1,500 / PHP 800.</li>
              <li>Duchess Room: PHP 2,500 / PHP 1,500.</li>
              <li>Queen Suite: PHP 3,500 / PHP 2,000.</li>
              <li>King Suite: PHP 4,500 / PHP 2,500.</li>
            </ul>

            <div className="brochure-image xs" data-caption="Event Hall Interior">
              <Image src="/images/materials/event-hall.jpg" alt="Event hall interior" fill className="object-cover" />
            </div>

            <h3>Amenities and Inclusions</h3>
            <ul>
              <li>Private bathroom, air-conditioning, WiFi, breakfast for 2.</li>
              <li>Pool and garden access for room guests.</li>
              <li>Reservation fee: PHP 500 (non-refundable).</li>
              <li>Extra bed: PHP 300 (single) / PHP 500 (double) per night.</li>
            </ul>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image sm" data-caption="Princess Room Interior">
                <Image src="/images/materials/princess.png" alt="Princess room" fill className="object-cover" />
              </div>
              <div className="brochure-image sm" data-caption="Duchess Room Interior">
                <Image src="/images/materials/duchess.png" alt="Duchess room" fill className="object-cover" />
              </div>
            </div>

            <h3>Venue Package Range</h3>
            <ul>
              <li>RK Hall: PHP 5,000 to PHP 10,000.</li>
              <li>RK Hall + Pool: PHP 10,000 to PHP 15,000.</li>
              <li>KR Garden and Pool: PHP 8,000 to PHP 23,000.</li>
              <li>RK Hall + KR Garden and Pool: PHP 12,000 to PHP 26,000.</li>
            </ul>

            <div className="brochure-image sm" data-caption="RK Hall Venue">
              <Image src="/images/materials/hall.png" alt="RK Hall venue" fill className="object-cover" />
            </div>
          </article>

          <article className="brochure-panel">
            <h2>La Bella Cafe & Resto Bar</h2>

            <h3>Best-Selling Food (menu-tagged)</h3>
            <ul>
              <li>Crispy Pata - PHP 750.</li>
              <li>Orange Chicken - PHP 250.</li>
              <li>Spicy Sisig - PHP 220.</li>
              <li>Lomi Overload - PHP 199.</li>
            </ul>

            <div className="brochure-image xs" data-caption="Crispy Pata">
              <Image src="/images/food/crispy-pata.jpg" alt="Crispy pata" fill className="object-cover" />
            </div>

            <h3>Popular Savory Picks</h3>
            <ul>
              <li>Calamares Fritos - PHP 265.</li>
              <li>Salt and Pepper Squid - PHP 265.</li>
              <li>Nilagang Bulalo - PHP 385.</li>
              <li>Cheeseburger - PHP 165.</li>
            </ul>

            <div className="brochure-image xs" data-caption="Calamares Fritos">
              <Image src="/images/food/calamares.jpg" alt="Calamares fritos" fill className="object-cover" />
            </div>

            <h3>Cafe and Drinks</h3>
            <ul>
              <li>Espresso-based drinks: PHP 99 to PHP 149.</li>
              <li>Non-coffee drinks: PHP 129 to PHP 149.</li>
              <li>Smoothies (Strawberry, Mango, Blueberry): PHP 159.</li>
              <li>Juices and iced tea: PHP 45 (pitcher PHP 299).</li>
            </ul>

            <h3>Desserts and Specialties</h3>
            <ul>
              <li>Halo-Halo and Mais con Yelo: PHP 75.</li>
              <li>Leche Flan, Mango Graham, Fruit Salad: PHP 50.</li>
              <li>Burnt Basque Cheesecakes: PHP 1,659 to PHP 2,059 (whole), PHP 169 to PHP 209 (slice).</li>
            </ul>

            <h3>Combos and Promos</h3>
            <ul>
              <li>Saver Meals: PHP 99 to PHP 215.</li>
              <li>The Royal Toast Promo: PHP 499 (3 beers + 1 royal bite).</li>
              <li>Pan Tray starts at: Chicken PHP 899, Pork PHP 999, Fish PHP 999, Beef PHP 1,299.</li>
            </ul>

            <div className="brochure-image sm" data-caption="La Bella Drinks and Dishes">
              <Image src="/images/banners/cafe-drinks.jpg" alt="La Bella Cafe drinks and dishes" fill className="object-cover" />
            </div>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image sm" data-caption="Strawberry Smoothie">
                <Image src="/images/cafe/strawberry-smoothie.jpg" alt="Strawberry smoothie" fill className="object-cover" />
              </div>
              <div className="brochure-image sm" data-caption="Ube Latte">
                <Image src="/images/cafe/ube-latte.jpg" alt="Ube latte" fill className="object-cover" />
              </div>
            </div>
          </article>

          <article className="brochure-panel">
            <h2>RKreatioNs Event Styling & Catering Services</h2>

            <h3>Catering Packages (Per Head)</h3>
            <ul>
              <li>Silver - PHP 400.</li>
              <li>Gold - PHP 500.</li>
              <li>Platinum - PHP 600.</li>
              <li>Diamond - PHP 800.</li>
            </ul>

            <div className="brochure-image xs" data-caption="Catering Package Spread">
              <Image src="/images/banners/catering.jpg" alt="Catering package spread" fill className="object-cover" />
            </div>

            <h3>Package Coverage</h3>
            <ul>
              <li>Menu sets include soup, mains, vegetables, rice, dessert, and juice.</li>
              <li>Higher tiers expand to premium meats and seafood selections.</li>
              <li>Wedding package matrix: PHP 80,000, 90,000, 120,000, and 200,000 tiers.</li>
              <li>All-In Wedding options: PHP 150,000, 200,000, and 250,000.</li>
            </ul>

            <h3>Celebration Packages</h3>
            <ul>
              <li>Birthday/Baptism Catering and Styling: PHP 70,000 (100 pax).</li>
              <li>Birthday/Baptism with Venue and Rooms: PHP 70,000 (70 pax).</li>
              <li>Debut Package: PHP 60,000 (50 pax).</li>
              <li>Birthday/Baptism/Debut Package: PHP 80,000 (100 pax).</li>
            </ul>

            <div className="brochure-image xs" data-caption="Debut Styling">
              <Image src="/images/materials/debut.jpg" alt="Debut package styling" fill className="object-cover" />
            </div>

            <h3>Styling and Add-On Services</h3>
            <ul>
              <li>Backdrop decor starts at PHP 5,000.</li>
              <li>All-in customized decor starts at PHP 10,000.</li>
              <li>Host/Clown/Magician/Game Facilitator starts at PHP 5,000.</li>
              <li>Photographer starts at PHP 5,000, photobooth starts at PHP 4,000.</li>
              <li>Grazing table starts at PHP 10,000, lechon starts at PHP 9,000.</li>
            </ul>

            <h3>Corkage Reference</h3>
            <ul>
              <li>Electric food cart: PHP 1,000.</li>
              <li>Lechon: PHP 1,500.</li>
              <li>Mobile bar/coffee bar: PHP 2,000.</li>
              <li>Sound/Band: PHP 2,000, Lights: PHP 1,000, LED wall: PHP 2,500.</li>
            </ul>

            <div className="brochure-image sm" data-caption="Catering Service Setup">
              <Image src="/images/banners/catering.jpg" alt="Catering service setup" fill className="object-cover" />
            </div>

            <div className="brochure-image-grid two-up">
              <div className="brochure-image sm" data-caption="Wedding Venue Setup">
                <Image src="/images/materials/wedding-venue.png" alt="Wedding venue setup" fill className="object-cover" />
              </div>
              <div className="brochure-image sm" data-caption="Birthday Celebration Setup">
                <Image src="/images/materials/birthday.jpg" alt="Birthday celebration setup" fill className="object-cover" />
              </div>
            </div>

            <div className="note">
              <p><strong>Inquiries:</strong> 0977 627 1360 | 054 341 3605</p>
              <p><strong>Email:</strong> book@villakathreyna.com</p>
              <p><strong>Website:</strong> www.villakathreyna.com</p>
            </div>
          </article>
        </div>
      </section>

    </main>
  )
}
