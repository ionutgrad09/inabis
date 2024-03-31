import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import oxydanteTeinture from "../photos/oxydant-teinture-cils.jpg";
import baseSemiPermanteFlexibleRubber from "../photos/base-semi-permante-flexible-rubber-base-uvled.jpg";
import cleanerTripleAction115ml from "../photos/cleaner-triple-action-peggy-sage-115ml.jpg";
import cleanerTripleAction485ml from "../photos/cleaner-triple-action-peggy-sage-485ml.jpg";
import collePeggySage3g from "../photos/colle-peggy-sage-3g.jpg";
import collePeggySage15g from "../photos/colle-peggy-sage-15g.jpg";
import colleTransparenteAvecPinceau6g from "../photos/colle-transparente-avec-pinceau-peggy-sage-6g.jpg";
import pinceAEpilerCrabeSouple9cm from "../photos/pince-a-epiler-crabe-souple-peggy-sage-9cm.jpg";
import pinceauTeintureCilsEtSourcils from "../photos/pinceau-teinture-cils-et-sourcils.jpg";
import teintureCilsEtSourcilsBrun from "../photos/teinture-cils-et-sourcils-brun.jpg";
import teintureCilsEtSourcilsNoir from "../photos/teinture-cils-et-sourcils-noir.jpg";
import teintureCilsEtSourcilsChatain from "../photos/teinture-cils-et-sourcils-chatain-clair.jpg";

const getPhotoFromName = (name) => {
    if (name === "Base semi-permante flexible rubber base UV/LED") {
        return baseSemiPermanteFlexibleRubber;
    } else if (name === "Cleaner triple action peggy sage 115ml") {
        return cleanerTripleAction115ml;
    } else if (name === "Cleaner triple action peggy sage 485ml") {
        return cleanerTripleAction485ml;
    } else if (name === "Colle peggy sage 3g") {
        return collePeggySage3g;
    } else if (name === "Colle peggy sage 15g") {
        return collePeggySage15g;
    } else if (name === "Colle transparente avec pinceau peggy sage 6g") {
        return colleTransparenteAvecPinceau6g;
    } else if (name === "Oxydant teinture cils") {
        return oxydanteTeinture;
    } else if (name === "Pince a epiler crabe souple peggy sage 9cm") {
        return pinceAEpilerCrabeSouple9cm;
    } else if (name === "Pinceau teinture cils et sourcils") {
        return pinceauTeintureCilsEtSourcils;
    } else if (name === "Teinture cils et sourcils brun") {
        return teintureCilsEtSourcilsBrun;
    } else if (name === "Teinture cils et sourcils noir") {
        return teintureCilsEtSourcilsNoir;
    } else if (name === "Teinture cils et sourcils chatain clair") {
        return teintureCilsEtSourcilsChatain;
    }
}

const ProductCard = ({name, price, image}) => {
    return (
        <Card sx={{ maxWidth: 345, display: "flex" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={getPhotoFromName(name)}
                    alt="No image available"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price}€
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductCard