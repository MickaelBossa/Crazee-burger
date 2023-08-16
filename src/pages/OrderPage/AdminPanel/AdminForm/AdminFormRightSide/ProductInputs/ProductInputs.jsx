import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import Input from '../../../../../../components/ui/Input/Input';

export default function ProductInputs() {
    return (
        <>
            <Input
                Icon={
                    <FaHamburger
                        width={15}
                        color="#747B91"
                        style={{ marginLeft: '24px' }}
                    />
                }
                placeholder="Nom du produit (ex: Super Burger)"
                backgroundColor={'var(--background_white)'}
                height="35px"
                changePlaceHolderColor={true}
                width="645px"
                required={false}
            />
            <Input
                Icon={
                    <BsFillCameraFill
                        width={15}
                        color="#747B91"
                        style={{ marginLeft: '24px' }}
                    />
                }
                placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                backgroundColor={'var(--background_white)'}
                height="35px"
                changePlaceHolderColor={true}
                width="645px"
                required={false}
            />
            <Input
                Icon={
                    <MdOutlineEuro
                        width={15}
                        color="#747B91"
                        style={{ marginLeft: '24px' }}
                    />
                }
                placeholder="Prix"
                backgroundColor={'var(--background_white)'}
                height="35px"
                changePlaceHolderColor={true}
                width="645px"
                required={false}
            />
        </>
    );
}