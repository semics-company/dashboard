import React, {useState} from 'react';
import useStyles from "../../Styles/dashboard_style";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Fade from '@material-ui/core/Fade';


import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const PrettoSlider = withStyles({
    root: {
        color: '#673ab7',
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


const AddOrder = () => {
    const classes=useStyles();
    const [checkboxvalue,setcheckboxvalue]=useState("date");
    const [checked, setChecked] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };


    return (
        <div>
            <Paper elevation={0} className={classes.Rootboardering}>
                <Typography variant="h6" style={{marginBottom:"10px"}}>
                    Add new Order
                </Typography>
                <div style={{display:"flex"}}>
                    <div style={{width:"66.66%"}}>
                        <div style={{margin:"1%"}} className={classes.halfdiv}>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">

                                <FormControl component="fieldset">
                                    <p>Advert type</p>
                                    <RadioGroup style={{display:"flex",flexDirection:"row"}}  aria-label="quiz" name="quiz" >
                                        <FormControlLabel onClick={e=> setcheckboxvalue("watch")} value="watchcount" control={<Radio checked={checkboxvalue=="watch"?true:false} color="primary" />} label="Watch time" />
                                        <FormControlLabel onClick={e=> setcheckboxvalue("date")} value="time" control={<Radio checked={checkboxvalue=="date"?true:false} color="primary" />} label="Date" />
                                    </RadioGroup>
                                </FormControl>
                            </RadioGroup>
                        </div>

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
                                    <PrettoSlider style={{margin:"1%"}} min={150} max={300} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={200} />

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
                        </Fade>





                    </div>


                </div>


                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{margin:"10px"}}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{margin:"10px"}}
                        startIcon={<SaveIcon />}
                    >
                        Cancel
                    </Button>
                </div>

            </Paper>

        </div>
    );
};

export default AddOrder;


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