export default class SportService {

    constructor() {
        this._api = 'http://api.football-data.org/v2';
    }

    async getResource(url) {
        const res = await fetch(`${this._api}${url}`, {
            headers: {
                'X-Auth-Token': 'ee9e32655fbb40f887db17ef2d5d3a71'
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getTeams = async () => {
        const res = await this.getResource('/teams');
        return res.teams.map(this._transformTeam);
    }

    getTeam = async (id) => {
        const res = await this.getResource(`/teams/${id}`);
        return this._transformTeam(res);
    }

    getLeagues = async () => {
        const res = await this.getResource('/competitions');
        return res.competitions.map(this._transformLeague);
    }

    getLeague = async (id) => {
        const res = await this.getResource(`/competitions/${id}`);
        return this._transformLeague(res);
    }

    _transformTeam = ({id, name, area, founded, venue, clubColors}) => {
        return {
            id,
            name,
            area: area.name,
            founded,
            venue,
            colors: clubColors
        }
    }

    _transformLeague = ({id, name, area}) => {
        return {
            id,
            name,
            area: area.name
        }
    }
}