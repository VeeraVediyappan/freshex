import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { commodity } from '../../../mock/ACommodity';

const borderColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];

class ChartModal extends Component {

    getLabel = commodity => {
        const labels = [];
        for(const com of commodity.info) {
            for(const label of com.chartData.labels) {
                if(! labels.includes(label)) labels.push(label);
            }
        }
        return labels;
    }

    getDataSets = commodity => {
        const dataSets = commodity.info.map((info, idx) => {
            return {
                label: info.containerNo,
                data: info.chartData.data,
                borderColor: borderColors[idx],
                fill: false
            }
        });
        console.log(dataSets);
        return dataSets;
    }
    
    render() {
        //const { open, commodity } = this.props;
        //const { open } = this.props;
        //const commodity = commodity;
        return(
           // <section>
            //  <Dialog
            //         disableBackdropClick
            //         disableEscapeKeyDown
            //         open={open}
            //         onClose={this.handleOk}
            //     >
            //         <DialogTitle>CHART </DialogTitle>
            //         <DialogContent>
                    <Line
	         data={
                {
                    labels: this.getLabel(commodity), 
                    datasets: this.getDataSets(commodity),
                    options: {
                        title: {
                          display: true,
                          text: 'Container details'
                        }
                      }
                }
        
        }
	        // width={250}
	        // height={200}
             />

            //         </DialogContent>
            //         <DialogActions>

            //             <Button onClick={() => this.props.close(this.props.modal)} variant="contained" color="secondary">
            //                 Close
            // </Button>

            //         </DialogActions>

            //     </Dialog>
       // </section>
        );
        
    }

}

export default ChartModal;