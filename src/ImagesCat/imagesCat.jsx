import './imagesCat.css'

    import CatIcon1 from '/img-01.png'
    import CatIcon2 from '/img-02.png'
    import CatIcon3 from '/img-03.png'
    import CatIcon4 from '/img-04.png'
    import CatIcon5 from '/img-05.png'
    import CatIcon6 from '/img-06.png'
    import CatIcon7 from '/img-07.png'
    import CatIcon8 from '/img-08.png'
    import CatIcon9 from '/img-09.png'
    import CatIcon10 from '/img-10.png'
    import CatIcon11 from '/img-11.png'
    import CatIcon12 from '/img-12.png'

const Form = () => {
    return(
        <main>
            <section>
                <div>
                    <img src={CatIcon1} alt="cat1" /> 
                    <img src={CatIcon2} alt="cat2" /> 
                    <img src={CatIcon3} alt="cat3" /> 
                </div>
                <div>
                    <img src={CatIcon4} alt="cat4" /> 
                    <img src={CatIcon5} alt="cat5" /> 
                </div>
                <div>
                    <img src={CatIcon6} alt="cat6" /> 
                </div>
                <div>
                    <img src={CatIcon7} alt="cat7" /> 
                    <img src={CatIcon8} alt="cat8" /> 
                    <img src={CatIcon9} alt="cat9" /> 
                </div>
                <div>
                    <img src={CatIcon10} alt="cat10" /> 
                    <img src={CatIcon11} alt="cat11" /> 
                </div>
                <div>
                    <img src={CatIcon12} alt="cat12" /> 
                </div>
            </section>
        </main>
    )
}
export default Form; 

