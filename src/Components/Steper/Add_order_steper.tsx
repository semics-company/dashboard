import React, {useState} from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import DescriptionIcon from '@material-ui/icons/Description';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import TextField from "@material-ui/core/TextField";
import Dashboard_style from "../../Styles/dashboard_style";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BusinessIcon from '@material-ui/icons/Business';
import CategoryIcon from '@material-ui/icons/Category';
import TodosProvider, { TodosContext } from "../../Context/TodosProvider";
import { useContext } from "react";
import Fade from "@material-ui/core/Fade";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Tooltip from '@material-ui/core/Tooltip';
import TuneIcon from '@material-ui/icons/Tune';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Slider from "@material-ui/core/Slider";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CalenderSvg from "../../assets/images/Svg/Calender_svg";
import ViewSvg from "../../assets/images/Svg/View_svg";
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import CardMedia from "@material-ui/core/CardMedia";
import image_advert from "../../assets/images/png/image_advert.png";
import video_advert from "../../assets/images/png/advert_video.png";

const Cartclasss = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            maxHeight:"150px"
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: "180px",
            margin:"5px"
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    }),
);


const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props: StepIconProps) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient(265deg, rgba(19,0,62,1) 0%, rgba(251,103,97,1) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient(265deg, rgba(19,0,62,1) 0%, rgba(251,103,97,1) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);


const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {

        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%,  rgba(19,0,62,1) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%,  rgba(19,0,62,1) 100%)',
    },
});

function ColorlibStepIcon(props: StepIconProps) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <DescriptionIcon />,
        2: <CategoryIcon />,
        3: <TuneIcon />,
        4: <DoneAllIcon />

    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        }

    }),
);

function getSteps() {
    return ['Order detail', 'Order type ', 'Order amount','Finish'];
}

function countryToFlag(isoCode: string) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}
const PrettoSlider = withStyles({
    root: {
        color: '#fb6761',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);



export default function Add_order_steper() {
    const classes = useStyles();
    const cartclass = Cartclasss();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [checkboxvalue,setcheckboxvalue]=useState("date");
    const { todos, addTodo } = useContext(TodosContext);
    const [image,setimage]=useState(false);
    const [imageloading,setimageloading]=useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [{alt, src}, setImg] = useState({
        src: "placeholder",
        alt: 'Upload an Image'
    });

    const handleImg = (e:any) => {
        setimageloading(true);
        setTimeout(()=>{
            if(e.target.files[0]) {
                setimage(true);
                setimageloading(false);
                setImg({
                    src: URL.createObjectURL(e.target.files[0]),
                    alt: e.target.files[0].name
                });
            }
        },2000)


    }

    const changetypeadvert=(type:string)=>{
        setcheckboxvalue(type);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const CloseModal=()=>{
        addTodo("new todo");
    }

    const longText = `
        Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
        Praesent non nunc mollis, fermentum neque at, semper arcu.
        Nullam eget est sed sem iaculis gravida eget vitae justo.
        `;

    function getStepContent(step: number) {
        const classes=Dashboard_style();


        switch (step) {
            case 0:
                return <>
                    <div style={{display:"flex"}} className={classes.halfdiv}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            className={classes.textboxstylexxl}
                            renderInput={(params) => <TextField {...params} label="Company list" variant="outlined" />}
                        />

                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            className={classes.textboxstylexxl}
                            renderInput={(params) => <TextField {...params} label="Advert" variant="outlined" />}
                        />


                    </div>

                    <div style={{display:"flex"}} className={classes.halfdiv}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={top100Films}
                            className={classes.textboxstylexxl}
                            getOptionLabel={(option) => option.title}
                            defaultValue={[top100Films[13]]}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Category"
                                    placeholder="Category"
                                />
                            )}
                        />

                    </div>

                </>;
            case 1:
                return <div style={{display:"flex",marginBottom:"20px"}}>

                    <div style={{width:"50%",display:"flex",justifyContent:"center",padding:"20px"}}>
                        <Card className={cartclass.root}>
                            <div className={cartclass.details}>
                                <CardContent className={cartclass.content}>
                                    <Typography style={{fontSize:"17px"}}>
                                        Advert by date
                                    </Typography>
                                    <Typography style={{fontSize:"14px"}} color="textSecondary">
                                        in this type you can choose image for banner in first and last page of a advert
                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="secondary"
                                                onClick={e=> changetypeadvert("date")}
                                                checked={checkboxvalue=="date" && true}

                                            />
                                        }
                                        label="Date tariff"
                                    />
                                </CardContent>
                            </div>
                            <CardMedia
                                className={cartclass.cover}
                                image={image_advert}
                                title="Live from space album cover"
                            />
                        </Card>
                    </div>

                    <div style={{width:"50%",display:"flex",justifyContent:"center",padding:"20px"}}>
                        <Card className={cartclass.root}>
                            <div className={cartclass.details}>
                                <CardContent className={cartclass.content}>
                                    <Typography style={{fontSize:"17px"}}>
                                        Advert by view
                                    </Typography>
                                    <Typography style={{fontSize:"14px"}} color="textSecondary">
                                        in this type you can choose video for advert in second page for 20 seconds


                                    </Typography>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="secondary"
                                                onClick={e=> changetypeadvert("watch")}
                                                checked={checkboxvalue=="watch" && true}

                                            />
                                        }
                                        label="Advert watch"
                                    />
                                </CardContent>

                            </div>
                            <CardMedia
                                className={cartclass.cover}
                                image={video_advert}
                                title="Live from space album cover"
                            />
                        </Card>

                    </div>

                </div>
            case 2:
                return <div>
                    <div>
                        <div style={checkboxvalue=="watch"?{display:"flex"}:{display:"none"}} className={classes.halfdiv}>
                            <TextField
                                id="outlined-number"
                                label="Count"
                                type="number"
                                className={classes.textboxstylexxl}

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                            />

                        </div>
                        <div style={checkboxvalue=="watch"?{display:"flex"}:{display:"none"}} className={classes.halfdiv}>
                            <Tooltip placement="bottom" title={longText} enterDelay={700} leaveDelay={200} arrow>
                                <PrettoSlider style={{margin:"1%"}} min={150} max={300} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={200} />
                            </Tooltip>
                        </div>
                    </div>
                    <Fade in={checkboxvalue=="date"}>
                        <div style={checkboxvalue=="date"?{display:"flex"}:{display:"none"}} className={classes.halfdiv}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Start date"
                                    format="MM/dd/yyyy"
                                    className={classes.textboxstylexxl}
                                    value={selectedDate}
                                    inputVariant={"outlined"}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="End date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    className={classes.textboxstylexxl}
                                    inputVariant={"outlined"}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />


                            </MuiPickersUtilsProvider>
                        </div>
                    </Fade>  </div>

            case 3:
                return <div>
                    <Typography style={{textAlign:"center"}} variant={"h5"}> Thank for investing their time and energy</Typography>
                    <Typography style={{textAlign:"center"}} variant={"subtitle1"}>We have received your information. </Typography>
                    <Typography style={{textAlign:"center"}} variant={"subtitle1"}>we will reply by email as soon as possible and company will add to list. </Typography>
                </div>

            default:
                return 'Unknown step';
        }
    }

    return (
        <div className={classes.root}>

            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div style={{marginTop:"10px"}}>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>

                            {getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>
                            {activeStep === steps.length - 1 ?
                                <>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={CloseModal}
                                        className={classes.button}
                                    >
                                        Close
                                    </Button>

                                </> :<>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>

                                </>}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}



const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];

interface CountryType {
    code: string;
    label: string;
    phone: string;
}

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971' },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'AU', label: 'Australia', phone: '61', suggested: true },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    { code: 'BA', label: 'Bosnia and Herzegovina', phone: '387' },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    { code: 'CA', label: 'Canada', phone: '1', suggested: true },
    { code: 'CC', label: 'Cocos (Keeling) Islands', phone: '61' },
    { code: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
    { code: 'CF', label: 'Central African Republic', phone: '236' },
    { code: 'CG', label: 'Congo, Republic of the', phone: '242' },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    { code: 'DE', label: 'Germany', phone: '49', suggested: true },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    { code: 'DO', label: 'Dominican Republic', phone: '1-809' },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    { code: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },
    { code: 'FM', label: 'Micronesia, Federated States of', phone: '691' },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    { code: 'FR', label: 'France', phone: '33', suggested: true },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    { code: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500' },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    { code: 'HM', label: 'Heard Island and McDonald Islands', phone: '672' },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    { code: 'IO', label: 'British Indian Ocean Territory', phone: '246' },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    { code: 'JP', label: 'Japan', phone: '81', suggested: true },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    { code: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869' },
    { code: 'KP', label: "Korea, Democratic People's Republic of", phone: '850' },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    { code: 'LA', label: "Lao People's Democratic Republic", phone: '856' },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    { code: 'MD', label: 'Moldova, Republic of', phone: '373' },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    { code: 'MF', label: 'Saint Martin (French part)', phone: '590' },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389' },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    { code: 'MP', label: 'Northern Mariana Islands', phone: '1-670' },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    { code: 'PM', label: 'Saint Pierre and Miquelon', phone: '508' },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    { code: 'PS', label: 'Palestine, State of', phone: '970' },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    { code: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47' },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    { code: 'ST', label: 'Sao Tome and Principe', phone: '239' },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    { code: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721' },
    { code: 'SY', label: 'Syrian Arab Republic', phone: '963' },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    { code: 'TC', label: 'Turks and Caicos Islands', phone: '1-649' },
    { code: 'TD', label: 'Chad', phone: '235' },
    { code: 'TF', label: 'French Southern Territories', phone: '262' },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    { code: 'TT', label: 'Trinidad and Tobago', phone: '1-868' },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    { code: 'TW', label: 'Taiwan, Province of China', phone: '886' },
    { code: 'TZ', label: 'United Republic of Tanzania', phone: '255' },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    { code: 'US', label: 'United States', phone: '1', suggested: true },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    { code: 'VA', label: 'Holy See (Vatican City State)', phone: '379' },
    { code: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784' },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    { code: 'VG', label: 'British Virgin Islands', phone: '1-284' },
    { code: 'VI', label: 'US Virgin Islands', phone: '1-340' },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];