import TeamBlock1 from "./components/dragableComponents/teamblocks/block1"
import TeamBlock2 from "./components/dragableComponents/teamblocks/block2";
import StatsBlock1 from "./components/dragableComponents/statsBlocks/block1"
import StatsBlock2 from "./components/dragableComponents/statsBlocks/block2";


export const initialData = {
    "columns": [
        {
            id: "column-1",
            title: "Components",
            rows: [
                {

                    title: "Team Blocks",
                    key: "teamBlocks",
                    blocks: [
                        {
                            id: "drag-teams-block1",
                            content: TeamBlock1(),
                            imageUrl:"/images/team1Screen.png"
                        },
                        {
                            id: "drag-teams-block2",
                            content: TeamBlock2(),
                            imageUrl:"/images/team2Screen.png"
                        },

                    ]
                },
                {

                    title: "Stats Blocks",
                    key: "statsBlocks",
                    blocks: [
                        {
                            id: "drag-stats-block1",
                            content: StatsBlock1(),
                            imageUrl:"/images/statsScreen1.png"
                        },
                        {
                            id: "drag-stats-block2",
                            content: StatsBlock2(),
                            imageUrl:"/images/statsScreen2.png"
                        },

                    ]
                }
            ]
        },
        {
            id: "column-2",
            title: "Builder",
            rows: []
        },


    ]
}