import {
    Hero,
    Popular,
    SuperQuality,
    Services,
    SpecialOffers,
    Reviews,
    Subscribe,
    Footer,
} from './sections'
import { Nav } from './components'

const App = () => {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>

            <section className="padding">
                <Popular />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x padding-y-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="padding bg-pale-blue">
                <Reviews />
            </section>
            <section className="padding-x sm:py-32 px-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x padding-t bg-black pb-8">
                <Footer />
            </section>
        </main>
    )
}

export default App
