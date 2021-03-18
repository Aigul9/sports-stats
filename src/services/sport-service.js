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
}