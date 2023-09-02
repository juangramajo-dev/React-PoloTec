import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { BASE_URL, IMG_URL, api } from "../services/api";

const Fetchlist = () => {
  const [pokemons, setPokemons] = useState(null);
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      setLoading(true);
      const result = await api.GET(`${BASE_URL}pokemon`);
      if (result) {
        console.log("poke: ", result);
        setPokemons(result.results);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getPokemonImgId = (id) => {
    console.log("long. " + id.length);
    switch (id.length) {
      case 1:
        return `00${id}`;
      case 2:
        return `0${id}`;
      default:
        return id;
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const result = await api.GET(next);
      if (result) {
        console.log('poke: ', result.results);
        setPokemons(prev => [...prev, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openPokemonModal = async (item) => {
    try {
      setLoading(true);
      const result = await api.GET(item.url);
      if (result) {
        setSelectedPokemon(result);
        setOpenModal(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const closePokemonModal = () => {
    setSelectedPokemon(null);
    setOpenModal(false);
  };

  const renderItem = (item) => {
    const path = item.url.split("/");
    const imgID = getPokemonImgId(path[6]);
    return (
      <Card
        p={2}
        sx={{
          display: "flex",
          height: 100,
          cursor: "pointer",
          "&:hover": { backgroundColor: "#5acdbd", color: "white" },
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            N° {imgID}
          </Typography>
          <Typography component="div" variant="h5">
            {item.name}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          src={`${IMG_URL}${imgID}.png`}
          alt="Pokemon"
        />
        <Button variant="outlined" onClick={() => openPokemonModal(item)}>
          Detalles
        </Button>
      </Card>
    );
  };

  const getFormattedPokemonImgId = (id) => {
    let formattedId = id.toString();
    if (id < 10) {
      formattedId = `00${formattedId}`;
    } else if (id < 100) {
      formattedId = `0${formattedId}`;
    }
    return formattedId;
  };



  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Mi Pokedex
        </Typography>
      </Grid>
      {pokemons &&
        pokemons.map((p, index) => {
          return (
            <Grid item xs={4} key={index}>
              {renderItem(p)}
            </Grid>
          );
        })}
      <Grid item xs={4}>
        <Card
          p={2}
          sx={{
            display: "flex",
            height: 100,
            cursor: "pointer",
            backgroundColor: "#317b52",
            "&:hover": { backgroundColor: "#5acdbd" },
          }}
          onClick={() => loadMore()}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" sx={{ color: "white" }}>
              Cargar Más
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, p: 2 }}
            src={`https://i.gifer.com/VAyR.gif`}
            alt="Loading"
          />
        </Card>
      </Grid>

      <Dialog open={openModal} onClose={closePokemonModal}>
        {selectedPokemon && (
          <div>
            <DialogTitle>{selectedPokemon.name}</DialogTitle>
            <DialogContent>
              <img
                src={`${IMG_URL}${getFormattedPokemonImgId(selectedPokemon.id)}.png`}
                alt={selectedPokemon.name}
              />

              <Typography variant="h6">Movimientos:</Typography>
              <ul>
                {selectedPokemon.moves.map((move, index) => (
                  <li key={index}>{move.move.name}</li>
                ))}
              </ul>
              <Typography variant="h6">Habilidades:</Typography>
              <ul>
                {selectedPokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))}
              </ul>
            </DialogContent>
            <DialogActions>
              <Button onClick={closePokemonModal} color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </Grid>
  );
};

export default Fetchlist;
