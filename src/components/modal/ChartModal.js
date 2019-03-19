import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



class ChartModal extends Component {

    render() {
        const { open } = this.props;
        return(
            <section>
             <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={this.handleOk}
                >
                    <DialogTitle>CHART </DialogTitle>
                    <DialogContent>
                    <Line
	         data={
                {
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'], 
                    datasets: [
                        {
                            label: "Price",
                            // fillColor: "rgba(220,220,220,0.2)",
                            // strokeColor: "rgba(220,220,220,1)",
                            // pointColor: "rgba(220,220,220,1)",
                            // pointStrokeColor: "#fff",
                            // pointHighlightFill: "#fff",
                            // pointHighlightStroke: "rgba(220,220,220,1)",
                            data: [22, 43, 35, 17, 131, 113]
                        }
                    ]
            }
        
        }
	         width={300}
	         height={150}
             />
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.props.close} variant="contained" color="secondary">
                            Close
            </Button>

                    </DialogActions>

                </Dialog>
        </section>
        );
        
    }

}

export default ChartModal;