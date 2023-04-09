## render stat
res.sprites.other.dream_world.front_default
------------------
res.name
res.id
res.height
res.weight
res.types[0].type.name
------------------
hp : res.stats[0].base_stat
atk : res.stats[1].base_stat
def : res.stats[2].base_stat
sp. atk : res.stats[3].base_stat
sp. def : res.stats[4].base_stat
speed : res.stats[5].base_stat
ability: res.abilities[0].ability.name

effect short
(res.abilities[0].ability.url) , respone => {
    respone.effect_entries[1].short_effect
}

