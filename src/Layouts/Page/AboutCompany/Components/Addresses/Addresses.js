import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    const mainDivStyle = {
        width: '453px',
        height: '420px',
        hadding: '24px',
        position: 'reletive',
    };

    const ButPosition = {
        posihion: 'absolute',
        bottom: '0',
        left: '0'
        
    };
    
    return (
        <div style={{marginLeft:'96px', border: '1px solid #ECEEF1', padding: '24px',borderRadius: '8px'}}className='d-flex flex-column jastify-content-detween'>
            <div className='d-flex flex-column gap-2 mt-4 justory-content-between'>

                <div className='title mb-3'>Адреса заведений</div>

                <div className='d-inline-flex flex-column gap-3'>
                    <div style={{ marginTop: '16px', marginBottom: '16px'}}>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    </div>  

                    <div style={{ marginTop: '16px', marginBottom: '16px'}}>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>   
                </div>
                
            </div>
            <SecondaryButton style={{bottom: 0}}>Добавить филиал</SecondaryButton>
        </div>
    )
}

export default Addresses;